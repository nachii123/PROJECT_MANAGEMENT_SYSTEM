package com.first.project_management.Controller;

import com.first.project_management.DTO.IssueDTO;
import com.first.project_management.Services.IssueService;
import com.first.project_management.Services.UserService;
import com.first.project_management.model.Issue;
import com.first.project_management.model.User;
import com.first.project_management.request.IssueRequest;
import com.first.project_management.response.AuthResponse;
import com.first.project_management.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @Autowired
    private UserService userService;


    @GetMapping("/{issueId}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long issueId)throws Exception{
        return ResponseEntity.ok(issueService.getIssueById(issueId));
    }
    @GetMapping("/project/{projectID}")
    public ResponseEntity<List<Issue>> getIssuesByProjectId(@PathVariable Long projectID)throws Exception{
       return ResponseEntity.ok(issueService.getIssueByProjectId(projectID));

    }

    @PostMapping
    public ResponseEntity<IssueDTO> createIssue (@RequestBody IssueRequest issue, @RequestHeader("Authorization")String token) throws Exception {

        User tokenUser = userService.findUserProfileByJwt(token);
        User user = userService.findUserById(tokenUser.getId());

       // if(user != null){

            Issue createdIssue = issueService.createIssue(issue, tokenUser);
            IssueDTO issueDTO = new IssueDTO();
            issueDTO.setDescription(createdIssue.getDescription());
            issueDTO.setDueDate(createdIssue.getDueDate());
            issueDTO.setId(createdIssue.getId());
            issueDTO.setPriority(createdIssue.getPriority());
            issueDTO.setProjectID(createdIssue.getProjectID());
            issueDTO.setStatus(createdIssue.getStatus());
            issueDTO.setTitle(createdIssue.getTitle());
            issueDTO.setTags(createdIssue.getTags());
            issueDTO.setAssign(createdIssue.getAssign());

            return ResponseEntity.ok(issueDTO);
//        }

    }

    @DeleteMapping("/{issueId}")
    public ResponseEntity<MessageResponse> deleteIssue(@PathVariable Long issueId,
                                                    @RequestHeader("Authorization")String token) throws Exception {
        User user = userService.findUserProfileByJwt(token);
        issueService.deleteIssue(issueId, user.getId());

        MessageResponse res = new MessageResponse();
        res.setMessage("Issue deleted");

        return ResponseEntity.ok(res);
    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> addUserToIssue(@PathVariable Long issueId, @PathVariable Long userId)throws Exception{
        Issue issue = issueService.addUserToIssue(issueId, userId);

        return ResponseEntity.ok(issue);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateIssueStatus(
            @PathVariable String status,
            @PathVariable Long issueId
    ) throws Exception {
        Issue issue = issueService.updateStatus(issueId,status);

        return ResponseEntity.ok(issue);
    }
}
