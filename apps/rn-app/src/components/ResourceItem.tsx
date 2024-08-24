import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../app/styles';
import ForwardArrowIcon from './ForwardArrowIcon';
import ResourceIcon from './ResourceIcon';
import { ResourcesSectionItem } from '@h4vnt3r/shared-types';

interface Props {
  resource: ResourcesSectionItem;
}

export default function ResourceItem({ resource }: Props) {
  return (
    <TouchableOpacity
      style={[styles.listItem, styles.learning]}
      onPress={() => Linking.openURL(resource.link)}
    >
      <ResourceIcon icon={resource.id} />
      <View style={styles.listItemTextContainer}>
        <Text style={[styles.textMd]}>{resource.title}</Text>
        <Text style={[styles.text2XS, styles.textSubtle]}>
          {resource.subtitle}
        </Text>
      </View>
      <ForwardArrowIcon />
    </TouchableOpacity>
  );
}
