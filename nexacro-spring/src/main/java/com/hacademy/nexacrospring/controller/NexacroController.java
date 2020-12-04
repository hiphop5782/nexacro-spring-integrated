package com.hacademy.nexacrospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * Nexacro Request를 처리하기 위한 컨트롤러
 * - 매핑 구현 시 NexacroResult를 반환하도록 구현
 */
@Controller
@RequestMapping("/nexacro")
public class NexacroController {
	
	/**
	 * 테스트 메소드
	 * @return NexacroResult 객체
	 */
	@GetMapping("/")
	public NexacroResult welcome() {
		NexacroResult result = new NexacroResult();
		result.addVariable("message", "Welcome!");
		return result;
	}
}
