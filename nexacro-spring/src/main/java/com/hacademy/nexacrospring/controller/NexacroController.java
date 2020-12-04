package com.hacademy.nexacrospring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hacademy.nexacrospring.repository.EmpRepository;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * Nexacro Request를 처리하기 위한 컨트롤러
 * - 매핑 구현 시 NexacroResult를 반환하도록 구현
 */
@Controller
@RequestMapping("/nexacro")
public class NexacroController {
	
	@Autowired
	private EmpRepository empRepository;
	
	/**
	 	테스트 메소드
		- 브라우저에서 /컨텍스트/nexacro/ 로 접속하면 xml 형태의 PlatformData 확인 가능
		- PlatformData에 message=Welcome! 형태의 데이터를 추가하여 반환 
	 	@return NexacroResult 객체
	 */
	@GetMapping("/")
	public NexacroResult welcome() {
		NexacroResult result = new NexacroResult();
		result.addVariable("message", "Welcome!");
		return result;
	}
	
	@GetMapping("/list")
	public NexacroResult list() {
		NexacroResult result = new NexacroResult();
		result.addDataSet("list", empRepository.list());
		return result;
	}
	
}
