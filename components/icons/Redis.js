const Redis = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="96" height="96"
viewBox="0 0 48 48"
style={{fill:"#000000"}}><path fill="#b71c1c" d="M45,29.316c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,29.316,3,29.832,3,30.469v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,32.882,45,32.83,45,32.775V29.316z"></path><path fill="#e53935" d="M20.616,39.158c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,39.792,22.048,39.798,20.616,39.158z"></path><path fill="#b71c1c" d="M45,21.675c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,21.675,3,22.192,3,22.829v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,25.242,45,25.19,45,25.135V21.675z"></path><path fill="#e53935" d="M20.616,31.517c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,32.152,22.048,32.158,20.616,31.517z"></path><path fill="#b71c1c" d="M45,14.035c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,14.035,3,14.551,3,15.188v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,17.601,45,17.549,45,17.494V14.035z"></path><path fill="#e53935" d="M20.616,23.877c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,24.512,22.048,24.517,20.616,23.877z"></path><path fill="#fff" d="M18.748,14.741c-0.002,1.042-2.762,2.057-5.093,2.086c-2.419,0.03-5.273-0.993-5.282-2.051	c-0.009-1.061,2.842-2.161,5.311-2.135C16.017,12.665,18.751,13.703,18.748,14.741z"></path><path fill="#fff" d="M17.038,18.471c2.393,1.022,4.785,2.045,7.178,3.067c1.054-1.56,2.108-3.12,3.162-4.68	C23.931,17.396,20.485,17.934,17.038,18.471z"></path><path fill="#fff" d="M21.86,9.775c-1.101,0.401-2.203,0.801-3.304,1.202c1.507,0.132,3.015,0.264,4.522,0.395	c0.48,0.796,0.959,1.592,1.439,2.387c0.295-0.722,0.59-1.444,0.885-2.166c1.286-0.1,2.572-0.2,3.858-0.3	c-0.997-0.419-1.994-0.839-2.991-1.259c0.254-0.608,0.508-1.216,0.762-1.825c-0.97,0.29-1.939,0.58-2.909,0.87	c-1.07-0.422-2.14-0.843-3.21-1.265C21.228,8.468,21.544,9.122,21.86,9.775z"></path><path fill="#b71c1c" d="M27.267,14.619c2.271-0.906,4.543-1.813,6.814-2.719c1.962,0.834,3.924,1.668,5.886,2.502	c-2.202,0.876-4.403,1.752-6.605,2.629C31.331,16.226,29.299,15.423,27.267,14.619z"></path><path fill="#a01c1c" d="M34.082,11.963c-0.005,1.596-0.01,3.191-0.015,4.787c1.967-0.783,3.934-1.565,5.901-2.348	C38.006,13.589,36.044,12.776,34.082,11.963z"></path></svg>
  )
}

export default Redis