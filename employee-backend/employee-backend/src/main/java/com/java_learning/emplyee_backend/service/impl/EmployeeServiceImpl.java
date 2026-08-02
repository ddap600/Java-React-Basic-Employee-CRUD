package com.java_learning.emplyee_backend.service.impl;

import com.java_learning.emplyee_backend.dto.EmployeeDto;
import com.java_learning.emplyee_backend.entity.Employee;
import com.java_learning.emplyee_backend.mapper.EmployeeMapper;
import com.java_learning.emplyee_backend.repository.EmployeeRepository;
import com.java_learning.emplyee_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
