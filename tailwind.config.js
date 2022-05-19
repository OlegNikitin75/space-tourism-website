module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Barlow': ['Barlow', 'sans-serif'],
      'Barlow Condensed': ['Barlow Condensed', 'sans-serif'],
      'Bellefair': ['Bellefair', 'serif'],

    },
    extend: {
      colors: {
        'dusty-gray': '#979797',
        'tropical-blue':'#D0D6F9',
        'vulcan':'#0B0D17',
        'white-rgba':'rgba(255, 255, 255, 0.04)',
      },
      backgroundImage: {
        'home-bg-desk': "url('/public/img/background-home-desktop.jpg')",
        'home-bg-tablet': "url('/public/img/background-home-tablet.jpg')",
        'home-bg-mobile': "url('/public/img/background-home-mobile.jpg')",
        'destination-bg-desk': "url('/public/img/background-destination-desktop.jpg')",
        'destination-bg-tablet': "url('/public/img/background-destination-tablet.jpg')",
        'destination-bg-mobile': "url('/public/img/background-destination-mobile.jpg')",
        'crew-bg-desk': "url('/public/img/background-crew-desktop.jpg')",
        'crew-bg-tablet': "url('/public/img/background-crew-tablet.jpg')",
        'crew-bg-mobile': "url('/public/img/background-crew-mobile.jpg')",
        'technology-bg-desk': "url('/public/img/background-technology-desktop.jpg')",
        'technology-bg-tablet': "url('/public/img/background-technology-tablet.jpg')",
        'technology-bg-mobile': "url('/public/img/background-technology-mobile.jpg')",
      },
    },
    plugins: [],
  }
}
