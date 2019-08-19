import { Platform } from 'react-native';
import DateInputAndroid from './index_android';
import DateInputIOS from './index_ios';

export default function DateInput({ date, onChange }) {
 	return (
		{
      Platform.OS === 'ios' ? (
		<DateInputIOS date={date} onChange={onChange} />
		): (
		<DateInputAndroid date={date} onChange={onChange} />
    )
  }
	)
}
