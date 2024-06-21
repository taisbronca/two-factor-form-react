import passwordIcon from './assets/password-icon.svg';
import OtpForm from './components/OtpForm';

function App() {

  return (
    <main className="min-h-screen bg-stone-300 py-40">
      <section className="p-8 bg-white mx-auto max-w-96 rounded-3xl text-center">
        <div className="h-16 w-16 bg-blue-300 rounded-full mx-auto flex items-center justify-center">
          <img src={passwordIcon} alt="" className='h-8 w-8' />
        </div>
        <h1 className='mt-5 text-3xl font-bold text-stone-800 font-display'>Enter verification code</h1>
        <p className='mt-1 text-sm text-stone-400'>We've sent a verification PIN code to your email</p>
        <OtpForm />
      </section>
    </main>
  )
}

export default App
