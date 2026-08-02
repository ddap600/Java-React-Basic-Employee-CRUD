package com.java_learning.employee_backend.repository;

import com.java_learning.employee_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
