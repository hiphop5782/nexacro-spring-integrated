# nexacro-spring

넥사크로와 스프링을 연동한 저장소 샘플

## 구현 순서

1. `Spring MVC Project` 생성
2. [pom.xml](./pom.xml) 설정
	- nexacro repository 추가
	- nexacro dependency 추가
3. [web.xml](./src/main/webapp/WEB-INF/web.xml) 설정
	- nexacro 설정 파일 추가
4. [nexacro-context.xml](./src/main/webapp/WEB-INF/nexacro-context.xml) 설정
	- applicationContextProvider 설정