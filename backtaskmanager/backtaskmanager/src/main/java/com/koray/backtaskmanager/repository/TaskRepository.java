package com.koray.backtaskmanager.repository;

import com.koray.backtaskmanager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}

