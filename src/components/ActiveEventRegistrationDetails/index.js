import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  switch (status) {
    case 'initial':
      return (
        <p className="detailspara">
          Click on an event, to view its registration details
        </p>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <>
          <img
            className="registrationclosedimg"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
          />
          <h1 className="registeredpara">Registrations are closed now!</h1>
          <p className="registrationclosedpara">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </>
      )
    case 'REGISTERED':
      return (
        <>
          <img
            className="registeredimg"
            alt="registered"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          />
          <h1 className="registeredpara">
            You have already registered for the event
          </h1>
        </>
      )
    case 'YET_TO_REGISTER':
      return (
        <>
          <img
            className="registrationclosedimg"
            alt="yet to register"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          />
          <p className="registrationclosedpara">
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall in love with this
            beautiful art form.
          </p>
          <button type="button" className="registrationbutton">
            Register Here
          </button>
        </>
      )
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
