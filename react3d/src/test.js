export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  let vip_ab = cookies.vip_ab;
  let val = 0 // 0 = a, 1 = b
  const _setCookie = (url) => {
    setCookie(null, "vip_ab",url, {
      maxAge: 999 * 24 * 60 * 60, // 设置 cookie 的有效期
    });
  }

  let isA = {
    0: () => {
      _setCookie('a')
      val = 1
      return {
        props: {},
      }
    },
    1: () => {
      _setCookie('b')
      val = 0
      return {
        redirect: {
          destination: "/qyvip/indexB",
          permanent: false, // 设置为 false 表示这是一个临时重定向
        },
      };
    }
  }
  if (!vip_ab) {
    // 无vip_ab  各50%  新用户 先去A 后去B
    let fn = isA[+(!vip_ab && val === 0) || +(!vip_ab && val === 1)]
    if (fn !== undefined) {
      fn()
    }
  } else {
    switch(vip_ab) {
      case 'a':
        return {props: {}};
      case 'b': 
      return {
        redirect: {
          destination: "/qyvip/indexB",
          permanent: false, // 设置为 false 表示这是一个临时重定向
        },
      };
      default:
        return {props: {}};
    }
  }
}