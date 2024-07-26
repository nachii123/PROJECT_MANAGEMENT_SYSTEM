package com.first.project_management.Repository;

import com.first.project_management.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue,Long> {
    public List<Issue> findByProjectID(Long id);
}
