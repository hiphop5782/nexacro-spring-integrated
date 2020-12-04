package com.hacademy.nexacrospring.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hacademy.nexacrospring.entity.Emp;

@Repository
public class EmpRepositoryImpl implements EmpRepository{
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Emp> list() {
		return sqlSession.selectList("emp.list");
	}
}
