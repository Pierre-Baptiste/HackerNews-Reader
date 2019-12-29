import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafe;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: #fff
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoriesContainerWrapper = styled.main`
	max-width: 1140px;
	padding: 20px 15px;
	margin: auto;

	#container {
		color: #999;
		text-transform: uppercase;
		font-size: 36px;
		font-weight: bold;
		padding-top: 40px;
		padding-bottom: 70px;
		position: relative;
		width: 100%;
		bottom: 45%;
		display: block;
		font-family: 'Roboto';
		text-align: center;
	}

	#flip {
		height: 50px;
		overflow: hidden;
	}

	#flip > div > div {
		color: #fff;
		padding: 4px 12px;
		height: 45px;
		margin-bottom: 45px;
		display: inline-block;
	}

	#flip div:first-child {
		animation: show 5s linear infinite;
	}

	#flip div div {
		background: #42c58a;
	}
	#flip div:first-child div {
		background: #4ec7f3;
	}
	#flip div:last-child div {
		background: #dc143c;
	}

	@keyframes show {
		0% {
			margin-top: -280px;
		}
		5% {
			margin-top: -165px;
		}
		33% {
			margin-top: -165px;
		}
		38% {
			margin-top: -80px;
		}
		66% {
			margin-top: -80px;
		}
		71% {
			margin-top: 0px;
		}
		99.99% {
			margin-top: 0px;
		}
		100% {
			margin-top: -270px;
		}
	}
`;
