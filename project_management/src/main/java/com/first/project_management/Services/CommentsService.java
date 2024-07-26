package com.first.project_management.Services;

import com.first.project_management.model.Comments;

import java.util.List;

public interface CommentsService {

    Comments createComment(Long issueId, Long userId, String comments) throws Exception;

    void deleteComment(Long commentId, Long userId) throws Exception;

    List<Comments> findCommentByIssueId(Long issueId);
}
