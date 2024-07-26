package com.first.project_management.Controller;

import com.first.project_management.Services.CommentsService;
import com.first.project_management.Services.UserService;
import com.first.project_management.model.Comments;
import com.first.project_management.model.User;
import com.first.project_management.request.CreateCommentRequest;
import com.first.project_management.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.stream.events.Comment;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {
    @Autowired
    private CommentsService commentsService;

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Comments> createComment(
            @RequestBody CreateCommentRequest req,
            @RequestHeader("Authorization")String jwt
            ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Comments createdComment = commentsService.createComment(req.getIssueId(), user.getId(),req.getContent());

        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);

    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<MessageResponse> deleteComment(@PathVariable Long commentId,
                                                         @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        commentsService.deleteComment(commentId, user.getId());
        MessageResponse res = new MessageResponse();
        res.setMessage("Comments deleted successfully");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<List<Comments>> getCommentsByIssueId(@PathVariable Long issueId){
        List<Comments> comments = commentsService.findCommentByIssueId(issueId);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }


}
