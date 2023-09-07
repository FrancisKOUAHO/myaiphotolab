import React from 'react'

const Login = () => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  const handleGoogleConnect = (): void => {
    console.log('google connect')
  }

  const handleSubmit = (event: any): void => {
    event.preventDefault()
  }

  return (
    <div
      className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:p-8 p-8"
      style={{
        background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
        height: '100vh',
      }}
    >
      <div className="grid w-full ">
        <div className="sm:mx-auto sm:w-full p-8 sm:max-w-md">
          <div className="flex justify-center items-center gap-3">
            <img src="/myaichat.png" style={{ width: '70px', height: '70px' }} alt="logo" />
            <span
              className="text-center text-3xl font-bold tracking-tight"
              style={{ color: 'white' }}
            >
              MyAIPhotoLab
            </span>
          </div>
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Se connecter
          </h1>
          <p className="mt-5 text-center text-sm text-white">Bienvenue !</p>
          <p className="mb-5 text-center text-[13px] text-white">
            Veuillez saisir votre adresse e-mail et un compte sera créé pour vous.
          </p>
          <div
            className="mt-10 py-10 px-4 shadow sm:rounded-lg sm:px-10"
            style={{
              borderRadius: '10px',
              boxShadow: 'rgba(132, 59, 206, 0.15) 0px 4px 24px',
            }}
          >
            <div
              className="flex justify-center items-center mb-20"
              style={{
                borderRadius: '10px',
                border: '1px solid white',
              }}
            >
              <button
                onClick={handleGoogleConnect}
                className="flex gap-3 justify-center items-center text-center p-2 text-white"
              >
                <img className="h-8 w-8" src="/googleLogo.png" alt="googleLogo" />
                Connexion avec Google
              </button>
            </div>
            <form className="mb-5" onSubmit={handleSubmit}>
              <div className="pb-5">
                <label className="block text-sm font-medium  mb-1 text-white" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full text-white bg-transparent rounded-md border border-white px-3 py-2 placeholder-white shadow-sm focus:border-white focus:outline-none focus:ring-white sm:text-sm"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                  style={{ backgroundColor: '#7F56D9' }}
                >
                  {isLoaded ? 'Loading...' : 'Se connecter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
