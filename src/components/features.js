import React from "react";
import './features.css'



const Features = () => {
  return (
    <div className="features">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>Connect Anytime, Anywhere!</h2>
            <br />
            <span>
              Our video conference app brings people closer with easy
              connectivity and affordability. Experience seamless virtual
              meetings, collaborate effortlessly, and stay connected across the
              globe. Say goodbye to distance and hello to convenience!</span>
          </div>
          <div className="flip-card-back">
            <h2>Your Passport to Seamless Communication!</h2>
            <br />
            <span
            >Unlock the world of effortless connectivity with our video
              conference app. Stay connected with colleagues, friends, and
              family, no matter where they are. Say goodbye to expensive travel
              and hello to affordable, hassle-free meetings.</span>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="service">
          <div className="svg">
            <svg
              className="svg-style"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="Groups2Icon">
              <path
                d="M10.27 12h3.46c.93 0 1.63-.83 1.48-1.75l-.3-1.79C14.67 7.04 13.44 6 12 6S9.33 7.04 9.09 8.47l-.3 1.79c-.15.91.55 1.74 1.48 1.74zm-8.61-.89c-.13.26-.18.57-.1.88.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29 0-.14-.03-.27-.07-.4-.01-.03-.01-.05.01-.08.09-.16.14-.34.14-.53 0-.31-.14-.6-.36-.82-.03-.03-.03-.06-.02-.1.07-.2.07-.43.01-.65-.16-.43-.55-.72-.99-.74-.03 0-.05-.01-.07-.03-.17-.21-.48-.35-.83-.35-.3 0-.57.1-.75.26-.03.03-.06.03-.09.02-.14-.06-.3-.09-.46-.09-.65 0-1.18.49-1.24 1.12 0 .02-.01.04-.03.06-.29.26-.46.65-.41 1.05.03.22.12.43.25.6.03.02.03.06.02.09zm14.58 2.54c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zm-15.02.93C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zm21.56 0c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06 0 1.1.9 2 2 2s2-.9 2-2z"
              ></path>
            </svg>
          </div>
          <div className="service-text">
            Easy Group Conference!! Bringing chaos to order, one virtual group
            hug at a time!
          </div>
        </div>
        <div className="service">
          <div className="svg">
            <svg
              className="svg-style"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CalendarMonthIcon">
              <path
                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z">

              </path>
            </svg>
          </div>
          <div className="service-text">
            Schedule Meets Any Time!! Time is no longer the boss, you are!!
          </div>
        </div>
        <div className="service">
          <div className="svg">
            <svg
              className="svg-style"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CurrencyRupeeIcon">
              <path
                d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7h7.66z">

              </path>
            </svg>
          </div>
          <div className="service-text">
            Free of Cost!! Saving you moolah and keeping your pockets jolly.
            High fives for freebies!
          </div>
        </div>
        <div className="service">
          <div className="svg">
            <svg
              className="svg-style"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="StopCircleIcon">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14H8V8h8v8z">
              </path>
            </svg>
          </div>
          <div className="service-text">
            Preserving valuable discussions and insights, enabling you to
            revisit and learn from every meeting.
          </div>
        </div>
        <div className="service">
          <div className="svg">
            <svg
              className="svg-style"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="QuestionAnswerIcon">
              <path
                d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z">
              </path>
            </svg>
          </div>
          <div className="service-text">
            In-Meet Chat Feature!! Facilitating seamless communication within
            meetings, fostering real-time collaboration and engagement!!
          </div>
        </div>
        <div className="service">
          <div className="svg">
            <svg
              className="svg-style"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="BoltIcon">
              <path
                d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z">
              </path>
            </svg>
          </div>
          <div className="service-text">
            Zooming through virtual space like a rocket-powered cheetah.
            Efficiently connecting dots, one meet at a time!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
