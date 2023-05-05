import {
  useRouter as useBaseRouter,
  HrefBase,
} from "../utils/navigation/useRouter";

interface Service1 extends HrefBase {
  pathname: "/service1";
  params: {
    service1: string;
  };
}

interface Service2 extends HrefBase {
  pathname: "/service2";
  params: {
    service2: string;
  };
}

interface Sitemap extends HrefBase {
  pathname: "_sitemap";
}

interface Service1_Home_Tab1_Modal extends HrefBase {
  pathname: "/service1/home/(tab1)/modal";
}

interface Service1_Home extends HrefBase {
  pathname: "/service1/home";
}

interface Service2_Modal extends HrefBase {
  pathname: "/service2/modal";
}

type Href =
  | Service1
  | Service1_Home
  | Service1_Home_Tab1_Modal
  | Service2
  | Service2_Modal
  | Sitemap;

export const useRouter = () => useBaseRouter<Href>();
