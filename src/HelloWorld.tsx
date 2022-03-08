import { interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
// import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({ titleText, titleColor }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{ flex: 1, backgroundColor: 'white' }}>
			<div style={{ opacity }}>
				<Sequence from={transitionStart + 10}>
					{/* <Title titleText={titleText} titleColor={titleColor} /> */}
					<div style={{
						fontFamily: 'SF Pro Text, Helvetica, Arial',
						fontWeight: 'bold',
						fontSize: 100,
						textAlign: 'center',
						position: 'absolute',
						top: 100,
						width: '100%',
					}}>
						<p style={{padding: '20px'}}>If debugging is the process of removing bugs, then programming must be the process of putting them in</p>
					</div>;
				</Sequence>
			</div>
		</div>
	);
};
