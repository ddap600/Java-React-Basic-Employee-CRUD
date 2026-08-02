package com.java_learning.emplyee_backend.repository;

import com.java_learning.emplyee_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
