## ⚠️ Precautions

- css-in-js만 사용가능합니다.

- AirBnb규칙을 따르지만 다음과 같은 내용을 수정했습니다.

<hr>

## 자동리뷰어 설정하는법

```
.github/CODEOWNERS

* @<GithubName>
* @<organizationName/TeamName>
```
<hr>

#### PR에서 리뷰해야 머지할 수 있게 설정

1. 깃허브 레포지토리 설정
2. 브랜치 탭
3. Add rule 버튼 클릭
4. Branch name pattern을 *로 설정
5. Require a pull request before merging을 체크
6. Require approvals를 체크하고 몇 명 리뷰해야 머지권한 얻을지 선택

<hr>

#### TEST를 사용하지 않을 것이라면

1. npm uninstall jest @types/jest @testing-library/jest-dom @testing-library/react jest-environment-jsdom jest-transform-stub babel-jest eslint-plugin-testing-library
2. .github/workflows/ci.yml에서 run: yarn test열 삭제
3. config/jest.config.js파일 삭제
