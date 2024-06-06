/// 이거 주석해도 폰트어썸 아이콘 제대로 배포되는지 확인해보기 -> 있어야됨
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
