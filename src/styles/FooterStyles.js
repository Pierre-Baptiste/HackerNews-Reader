import styled from 'styled-components';

export const FooterStyles = styled.main`
	max-width: 1140px;
	padding: 20px 15px;
	margin: auto;

	.highlight {
		display: inline;
		padding-bottom: 3px;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 50%,
			#fffd98 50%
		);
	}

	hr {
		width: 150px;
		margin-left: 0;
		height: 5px;
		border-top: 2px dotted #474350;
		border-bottom: 2px dotted #474350;
		border-left: none;
	}

	#container {
		color: #474350;
		text-transform: uppercase;
		font-size: 36px;
		font-weight: bold;
		padding-top: 40px;
		padding-bottom: 40px;
		position: relative;
		width: 100%;
		bottom: 45%;
		display: block;
		font-family: 'Roboto';
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

	.footer {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 1rem;
		background-color: #efefef;
		text-align: center;
		text-decoration: none;
	}
`;
