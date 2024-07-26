package com.first.project_management.Repository;

import com.first.project_management.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comments , Long> {

    List<Comments> findCommentByIssueId(Long issueId);
}
