# nexacro-spring

넥사크로와 스프링을 연동한 저장소 샘플

## 구현 순서

1. `Spring MVC Project` 생성
2. [pom.xml](./pom.xml) 설정
	- nexacro repository 추가
	- nexacro dependency 추가
3. [web.xml](./src/main/webapp/WEB-INF/web.xml) 설정
	- nexacro 설정 파일 추가
4. [nexacro-context.xml](./src/main/webapp/WEB-INF/spring/nexacro-context.xml) 설정
	- applicationContextProvider 설정
5. [nexacro-servlet-context.xml](./src/main/webapp/WEB-INF/spring/appServlet/nexacro-servlet-context.xml) 설정
	- NexacroInterceptor : nexacro platform으로부터 데이터를 수신받아 PlatformData로 변환하는 작업을 수행
	- NexacroFileView : nexacro platform으로 파일 전달 수행
	- NexacroView : nexacro platform으로 데이터 전달 수행
	- NexacroMethodArgumentResolver : PlatformData를 Java Bean으로 변환하는 작업을 수행
	- NexacroHandlerMethodReturnValueHandler : 응답 데이터를 PlatformData로 변환하는 작업을 수행  
	- NexacroMappingExceptionResolver : nexacro platform 통신 규약에 맞는 오류 처리를 수행
6. 
	