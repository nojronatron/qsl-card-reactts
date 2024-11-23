function convertKeyToName(key: string) {
  switch (key) {
    case 'mycallsign':
      return 'My Callsign';
    case 'mycity':
      return 'My City';
    case 'mycounty':
      return 'My County';
    case 'mystate':
      return 'My State';
    case 'mycqzone':
      return 'My CQ Zone';
    case 'myarrlsection':
      return 'My ARRL Section';
    case 'mygrid':
      return 'My Grid';
    case 'urname':
      return 'UR Name';
    case 'urcallsign':
      return 'UR Callsign';
    case 'qsodate':
      return 'QSO Date';
    case 'qsotime':
      return 'QSO Time (UTC)';
    case 'qsobandmhz':
      return 'QSO Band/MHz';
    case 'qsomode':
      return 'QSO Mode';
    case 'qsoexchange':
      return 'QSO Exchange';
    case 'qsosignal':
      return 'QSO Signal';
    case 'psetnx':
      return 'PSE/TNX';
    default:
      return 'My Name';
  }
}

export default convertKeyToName;
