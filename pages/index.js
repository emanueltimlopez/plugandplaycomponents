import Nav from '../components/nav'
import CTA from '../components/cta'
import PaymentInfo from '../components/payment'
import TODO from '../components/todo'
import Row from '../components/row'

function ButtonToCode({url}) {
  return (
    <div className="text-center w-full"><a href={url} className="text-ms py-2 px-4 text-white rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 hover:to-teal-400">Code</a></div>
  )
}

export default function IndexPage() {
  return (
    <div className="bg-gray-400">
      <Nav />
      <div className="py-10">
        <h1 className="text-5xl text-center text-accent-1">
          Tailwind components
        </h1>

        <div className="flex flex-wrap justify-around items-center pb-20">
          <div>
            <CTA />
            <ButtonToCode />
          </div>
          <div>
            <PaymentInfo />
            <ButtonToCode />
          </div>
          <div>
            <TODO />
            <ButtonToCode />
          </div>
          <div className="w-2/3 mt-20 px-20">
            <Row />
            <ButtonToCode />
          </div>
        </div>
      </div>
    </div>
  )
}
