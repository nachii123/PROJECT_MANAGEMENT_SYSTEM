package com.first.project_management.Services;

import com.first.project_management.Repository.IssueRepository;
import com.first.project_management.model.Issue;
import com.first.project_management.model.Project;
import com.first.project_management.model.User;
import com.first.project_management.request.IssueRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
class IssueServiceImpl implements IssueService {

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;
    @Override
    public Issue getIssueById(Long issueId) throws Exception {
        Optional<Issue> issue = issueRepository.findById(issueId);
        if(issue.isEmpty()){
            throw new Exception("Issues not found");
        }
        return issue.get();
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws Exception {

        return issueRepository.findByProjectID(projectId);
    }

    @Override
    public Issue createIssue(IssueRequest issueRequest, User user) throws Exception {
        Project project = projectService.getProjectById(issueRequest.getProjectID());
        Issue issue = new Issue();
        issue.setTitle(issueRequest.getTitle());
        issue.setDescription(issueRequest.getDescription());
        issue.setStatus(issueRequest.getStatus());
        issue.setProjectID(issueRequest.getProjectID());
        issue.setPriority(issueRequest.getPriority());
        issue.setDueDate(issueRequest.getDueDate());

        issue.setProject(project);

        return issueRepository.save(issue);
    }

    @Override
    public Optional<Issue> updateIssue(Long issueId, IssueRequest updateIssue, Long userId) throws Exception {
        return Optional.empty();
    }

    @Override
    public void deleteIssue(Long issueId, Long userId) throws Exception {
        getIssueById(issueId);
        issueRepository.deleteById(issueId);
    }

    @Override
    public List<Issue> getIssueByAssignId(Long assigneId) throws Exception {
        return null;
    }

    @Override
    public List<Issue> searchIssue(String title, String status, String priority, Long assigneeId) throws Exception {
        return null;
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws Exception {
        User user = userService.findUserById(userId);
        Issue issue = getIssueById(issueId);

        issue.setAssign(user);
        return issueRepository.save(issue);
    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws Exception {

        Issue issue = getIssueById(issueId);

        issue.setStatus(status);
        return issueRepository.save(issue);
    }
}