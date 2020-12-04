package com.hacademy.nexacrospring.entity;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Emp {
	private int empNo;
	private String empName;
	private int salary;
	private Date hireDate;
	private String phoneNumber;
	private String email;
	private String position;
	private String dept;
}
