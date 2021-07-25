# API Document Creator

![https://github.com/rhea-so/APIDocumentCreator/blob/main/images/build.gif?raw=true](https://github.com/rhea-so/APIDocumentCreator/blob/main/images/build.gif?raw=true)

REST API 문서 만들기 귀찮잖아요?  
매번 변경사항 있을때마다, 수동으로 찾아서 업데이트 하기 귀찮잖아요?  
이 어플리케이션이 당신을 도와줄거에요!  

## Installation

```sh
npm i -g api-document-creator

# 이후 api-doc나 api-document로 접근 가능
api-doc
api-document
```

## Usage

```sh
api-doc -h
api-doc help
```

실행시,

```
문서를 만들어 주는 어플리케이션입니다

# 명령어
-h, help:  도움말을 표시합니다
-b, , build:  API 문서를 만듭니다
-c 문서A 문서B, compare 문서A 문서B:  문서 간의 버전을 비교합니다
-ex, example:  예시 코드를 생성합니다
-r, routes: 모든 라우터의 URL 주소를 json 파일에 저장합니다 

# Issue가 발생하면 다음 이메일로 연락해주세요
 * jeonghyeon.rhea@gmail.com
```

## Support Git History

### Credits

Based on these amazing projects:

* rhea by [JeongHyeon Kim](https://github.com/rhea-so)

### License

MIT