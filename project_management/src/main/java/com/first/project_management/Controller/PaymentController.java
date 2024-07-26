package com.first.project_management.Controller;

import com.first.project_management.Services.UserService;
import com.first.project_management.model.PlanType;
import com.first.project_management.model.User;
import com.first.project_management.response.PaymentLinkResponse;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {



//    @Value("${razorpay.api.key}")
//    private String apiKey;
//
//    @Value("${razorpay.api.secret}")
//    private String apiSecret;

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Autowired
    private UserService userService;


    @PostMapping("/{planType}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @PathVariable PlanType planType,
            @RequestHeader("Authorization") String jwt
            ) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);
        int amount = 799*100;
        if (planType.equals(PlanType.ANNUALLY)){
            amount = amount*12;
            amount = (int)(amount*0.7);
        }

        // ACtual impl of razorpay


            RazorpayClient rozarpay = new RazorpayClient(apiKey,apiSecret);
            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount",amount);
            paymentLinkRequest.put("currency", "INR");
            JSONObject customer = new JSONObject();
            customer.put("name", user.getFullName());
            customer.put("email", user.getEmail());
            paymentLinkRequest.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("email", true);
            paymentLinkRequest.put("notify",notify);

            //When customer complete the payment the it will go to the this URL
            paymentLinkRequest.put("callback_url", "http://localhost:5173/upgrade_plan/success?planType"+planType);


            PaymentLink  paymentLink = rozarpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId = paymentLink.get("id");
            String paymentLinUrl = paymentLink.get("short_url");

            PaymentLinkResponse res= new PaymentLinkResponse();
            res.setPayment_link_id(paymentLinkId);
            res.setPayment_link_url(paymentLinUrl);

            return new ResponseEntity<>(res, HttpStatus.OK);


    }
}
