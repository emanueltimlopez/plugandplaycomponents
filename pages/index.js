import Nav from '../components/nav'
import CTA from '../components/cta'
import PaymentInfo from '../components/payment'
import TODO from '../components/todo'
import Row from '../components/row'
import Head from 'next/head'

function ButtonToCode({url}) {
  return (
    <div className="text-center w-full"><a href={url} className="text-ms py-2 px-4 text-white rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 hover:to-teal-400">Code</a></div>
  )
}

export default function IndexPage() {
  return (
    <div className="bg-gray-400">
      <Head>
        <title>Plug&Play Components</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <div>
        <h1 className="text-4xl mb-5 px-8 text-accent-1">
          Plug&Play Components
        </h1>
        <ul className="text-xl ml-20 mb-10">
          <li className="flex items-center"><svg class="h-12 mr-1" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path fill="url(#paint0_linear)" fill-rule="evenodd" clip-rule="evenodd" d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"></path>
              <defs><linearGradient id="paint0_linear" x1="3.5" y1="16" x2="59" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#2298BD"></stop><stop offset="1" stop-color="#0ED7B5"></stop></linearGradient></defs></svg>
              Using Tailwind CSS</li>
          <li className="flex text-xl ml-1 items-center"><span className="text-4xl mr-3">💸</span>Free to use</li>
        </ul>

        <div className="flex flex-wrap justify-around items-center pb-20">
          <div>
            <CTA />
            <ButtonToCode url="https://github.com/emanueltimlopez/plugandplaycomponents/blob/master/components/cta.js"/>
          </div>
          <div>
            <PaymentInfo />
            <ButtonToCode url="https://github.com/emanueltimlopez/plugandplaycomponents/blob/master/components/payment.js"/>
          </div>
          <div>
            <TODO />
            <ButtonToCode url="https://github.com/emanueltimlopez/plugandplaycomponents/blob/master/components/todo.js"/>
          </div>
          <div className="w-2/3 mt-20 px-20">
            <Row />
            <ButtonToCode url="https://github.com/emanueltimlopez/plugandplaycomponents/blob/master/components/row.js"/>
          </div>
        </div>
      </div>
    </div>
  )
}
