import Logo from '../components/atoms/Logo';

export default function LogIn() {
  return (
    <>
      <Logo />
      <div>
        이메일
        <input type="email" placeholder="이메일" />
      </div>
      <div>
        비밀번호
        <input type="password" placeholder="입력" />
      </div>
      <button type="submit">로그인 하기</button>
      <p>
        회원이 아니신가요? <a href="/">회원가입하기</a>
      </p>
    </>
  );
}
