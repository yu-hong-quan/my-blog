// useVisitData.ts
/**
 * 网站访问量统计 hooks
 */
function useVisitData() {
    const script = document.createElement('script')
    script.defer = true
    script.async = true
    // 调用 Vercount 接口
    script.src = 'https://cloud.umami.is/script.js'
    script.setAttribute('data-website-id', '45cbb2d9-9bc3-48fe-925a-856762ff10a6')
    // 调用 不蒜子 接口
    // script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    document.head.appendChild(script)
  }
  
  export default useVisitData
  