import styled from 'styled-components/native'
import { TouchableOpacity, View } from 'react-native'
import { useOpenURL } from '../hooks/useOpenURL'

const Container = styled.View`
  flex-direction: row;
  margin: 8px 0;
  border: 1px solid #202;
  border-radius: 8px;
  flex: 0;
`

const Title = styled.Text`
  width: 200px;
  flex-shrink: 1;
  flex-wrap: wrap;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`

const CardImage = styled.Image`
  min-width: 140px;
  height: auto;
  margin-right: 12px;
  border-radius: 8px;
  contain: content;
`

const FlexRow = styled.View`
  flex-direction: row;
`

const CardTag = styled.Text`
  font-size: 12px;
  color: #7c7498;
`

const PostData = styled(CardTag)`
  color: #a29fa8;
`

const Card = ({ title, thumbnail, genre, platform, release_date, game_url }) => {
  const handlePress = useOpenURL(game_url)

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container>
        <CardImage source={{ uri: thumbnail }} />
        <View>
          <FlexRow>
            <Title numberOfLines={2}>{title}</Title>
          </FlexRow>
          <CardTag>{genre}</CardTag>
          <CardTag>{platform}</CardTag>
          <PostData>{release_date}</PostData>
        </View>
      </Container>
    </TouchableOpacity>
  )
}

export default Card
