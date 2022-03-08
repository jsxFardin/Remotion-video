// import {Composition} from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Player } from "@remotion/player";

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Player
				component={HelloWorld}
				durationInFrames={120}
				compositionWidth={1920}
				compositionHeight={1080}
				fps={30}
				controls
				loop
				style={{
					width: 1280,
					height: 720,
				}}
				autoPlay
			/>
		</>
	);
};
