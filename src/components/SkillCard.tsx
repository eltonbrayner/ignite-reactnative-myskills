import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  mySkill: string;
}

export function SkillCard({ mySkill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.3} style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{mySkill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1e25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
