/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=629f3f6584a3fe741cdd75b9").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '62b8d317fb5c4c7d3843340e'
    htmlEl.dataset['wfSite'] = '629f3f6584a3fe741cdd75b9'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(D:\\css\\normalize.css);
          @import url(D:\\css\\webflow.css);
          @import url(D:\\css\\boxbytes-nft-site.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-2">
            <div className="af-class-div-block-19">
              <div className="af-class-div-block-17"><img src="images/MISTER-POOP.png" loading="lazy" style={{opacity: 0}} srcSet="images/MISTER-POOP-p-500.png 500w, images/MISTER-POOP-p-800.png 800w, images/MISTER-POOP-p-1080.png 1080w, images/MISTER-POOP-p-1600.png 1600w, images/MISTER-POOP-p-2000.png 2000w, images/MISTER-POOP-p-2600.png 2600w, images/MISTER-POOP-p-3200.png 3200w, images/MISTER-POOP.png 4859w" sizes="80vw" alt className="af-class-image-23" />
                <a style={{opacity: 0}} href="#" className="af-class-button w-inline-block">
                  <div className="af-class-div-block-20">
                    <div className="af-class-text-block">MINT</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="af-class-div-block-16">
              <div data-w-id="231cdeb5-70f6-e537-4991-1655a163bb44" className="af-class-section-5 af-class-phone-section af-class-wf-section"><img src="images/sloth-crop.png" loading="lazy" style={{WebkitTransform: 'translate3d(360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} srcSet="images/sloth-crop-p-500.png 500w, images/sloth-crop-p-800.png 800w, images/sloth-crop-p-1080.png 1080w, images/sloth-crop.png 1304w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 63vw, 578.6500244140625px" alt className="af-class-phone-img af-class-left-2" /><img src="images/Bhei-Crop.png" loading="lazy" style={{WebkitTransform: 'translate3d(180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} srcSet="images/Bhei-Crop-p-500.png 500w, images/Bhei-Crop-p-800.png 800w, images/Bhei-Crop-p-1080.png 1080w, images/Bhei-Crop.png 1175w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 91vw, 839.2166748046875px" alt className="af-class-phone-img af-class-left-1" /><img src="images/jedi-crop.png" loading="lazy" style={{WebkitTransform: 'translate3d(0, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} srcSet="images/jedi-crop-p-500.png 500w, images/jedi-crop-p-800.png 800w, images/jedi-crop-p-1080.png 1080w, images/jedi-crop.png 1256w" sizes="(max-width: 1279px) 100vw, (max-width: 1439px) 999.38330078125px, (max-width: 1919px) 69vw, 999.38330078125px" alt className="af-class-phone-img af-class-center" /><img src="images/cowboy-crop.png" loading="lazy" style={{WebkitTransform: 'translate3d(-180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(-180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(-180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(-180px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} srcSet="images/cowboy-crop-p-500.png 500w, images/cowboy-crop-p-800.png 800w, images/cowboy-crop-p-1080.png 1080w, images/cowboy-crop.png 1190w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 86vw, 792.7166748046875px" alt className="af-class-phone-img af-class-right-1" /><img src="images/mad-mohawk-Crop.png" loading="lazy" style={{WebkitTransform: 'translate3d(-360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(-360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(-360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(-360px, 600px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} srcSet="images/mad-mohawk-Crop-p-500.png 500w, images/mad-mohawk-Crop-p-800.png 800w, images/mad-mohawk-Crop-p-1080.png 1080w, images/mad-mohawk-Crop.png 1182w" sizes="(max-width: 479px) 87vw, (max-width: 767px) 417.6333312988281px, (max-width: 991px) 54vw, (max-width: 1279px) 51vw, (max-width: 1439px) 39vw, 501.16668701171875px" alt className="af-class-phone-img af-class-right-2" /></div>
            </div>
            <div className="af-class-section-3 af-class-wf-section" />
            <div className="af-class-div-block-15"><img src="images/BBLOGOFINAL.png" loading="lazy" srcSet="images/BBLOGOFINAL-p-500.png 500w, images/BBLOGOFINAL-p-800.png 800w, images/BBLOGOFINAL-p-1080.png 1080w, images/BBLOGOFINAL-p-1600.png 1600w, images/BBLOGOFINAL-p-2000.png 2000w, images/BBLOGOFINAL-p-2600.png 2600w, images/BBLOGOFINAL-p-3200.png 3200w, images/BBLOGOFINAL.png 7422w" sizes="222.6666717529297px" alt className="af-class-image-20" />
              <div className="af-class-div-block-18"><img src="images/Thick-BB-Logo-White.png" loading="lazy" srcSet="images/Thick-BB-Logo-White-p-500.png 500w, images/Thick-BB-Logo-White-p-800.png 800w, images/Thick-BB-Logo-White-p-1080.png 1080w, images/Thick-BB-Logo-White.png 1769w" sizes="100vw" alt className="af-class-image-21" /></div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */