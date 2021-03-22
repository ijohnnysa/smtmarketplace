import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --grey: #f7f7f7;
    --brown: #f7b030;
    --red: #eb423f;
    --blue: #929aab;
    --blue-magenta: #161626;
  }

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	#root {
		max-width: 1020px;
		margin: 0 auto;
		padding: 0 20px 50px;
	}

	body {
		background: var(--blue-magenta);
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font: 14px Roboto, sans-serif;
	}

	button {
		cursor: pointer;
	}
`;
