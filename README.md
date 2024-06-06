### 메모

- 클론받으면 루트디렉토리에 .env.local 파일 만들고 다음과 같이 지정

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

- Next.js 프로젝트에서 루트디렉토리에 public폴더에서 이미지 가져올시 경로를 절대 경로로 지정해야 합니다.
  예를들어 public/svg/flex-ui-violet-light.svg 파일을 사용하려면 다음과 같이 작성해야 합니다:

```
<img
  className="h-8"
  src="/svg/flex-ui-violet-light.svg"
  alt=""
/>
```

- nextjs에서 폰트어썸아이콘 사용 : https://s-young01.tistory.com/71

- 테일윈드 센터 레이아웃 템플릿

```
<section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            {/* contents */}
            {/* /contents */}
          </div>
        </div>
      </div>
    </section>
```

- DB테이블은 'linkport' 사용중 (24.06.04)
- @ 는 app폴더 밖 경로를 의미함
- 클라이언트사이드 랜더링시 다음 이용 : import { createClient } from '@/utils/supabase/client'
- 서버사이드 랜더링시 다음 이용 : import { createClient } from '@/utils/supabase/server'
- 로그인은 진짜 이메일 인증해야 로그인가능함 !
- 로그인 성공시 페이지 활성 코드 (/app/protected/page 참고) but, async~await는 클라이언트 사이드에서 허용이 안되서 저대로는 못씀.

```
 const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
```

- 테스트용 관리자 아이디 : test@test / 비번 : 4자리
- 로그인 해야만 dashboard 페이지 나오게 구현. server 사이드로 위의 로그인성공시 활성코드 쓰고 import로 보드 페이지 불러오면됨..!
- /notes 페이지는 url로 들어가면 안되니까 (notes)로 폴더명변경.

### 해결한 문제

- 로그인하는 유저별로 다르게 dashboard 보여줄려면 DB table 어떻게 짤지 고민하기 -> userid 일치여부로 구현함!

### 다음 작업예정

- 회원가입 이메일 인증 후에 protect페이지로 이동하는 이슈 해결하기
- 코드구조 뜯어보고 깔끔하게 정리해서 보일러플레이트로 만들기
- url 저장 형태로 UI, DB 구축하기
- google, github로 로그인
- 편집용이 아닌 배포용 dashboard 구현문제

### 테스트용 배포주소

https://linkport-nextjs-try.vercel.app/
