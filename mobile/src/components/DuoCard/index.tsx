import React, { useMemo } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";
import { GameController } from "phosphor-react-native";

import { styles } from "./styles";

export interface DuoCardProps {
	id: string;
	hoursEnd: string;
	hourStart: string;
	name: string;
	useVoiceChannel: boolean;
	weekDays: string[];
	yearsPlaying: number;
}

interface Props {
	data: DuoCardProps;
	onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
	const useVoiceChannel = useMemo(
		() => (data.useVoiceChannel ? "Sim" : "Não"),
		[data.useVoiceChannel]
	);
	const colorValue = useMemo(
		() => (data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT),
		[data.useVoiceChannel]
	);

	return (
		<View style={styles.container}>
			<DuoInfo label="Nome" value={data.name} />
			<DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
			<DuoInfo
				label="Disponibilidade"
				value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hoursEnd}`}
			/>
			<DuoInfo
				label="Chamada de áudio"
				value={useVoiceChannel}
				colorValue={colorValue}
			/>
			<TouchableOpacity style={styles.button} onPress={onConnect}>
				<GameController color={THEME.COLORS.TEXT} size={20} />
				<Text style={styles.buttonTitle}>Conectar</Text>
			</TouchableOpacity>
		</View>
	);
}
