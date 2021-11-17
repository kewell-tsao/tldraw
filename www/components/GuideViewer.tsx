import { styled } from '-styles'
import { Cross2Icon } from '@radix-ui/react-icons'

export function GuideViewer() {
  return (
    <GuideViewerContainer>
      <GuideViewerInnerContainer>
        <iframe
          id="guide-viewer"
          title="tldraw Guide"
          width="100%"
          height="100%"
          src="/guide/intro"
        />
        <CloseButtonWrapper>
          <Cross2Icon />
        </CloseButtonWrapper>
      </GuideViewerInnerContainer>
    </GuideViewerContainer>
  )
}

const GuideViewerContainer = styled('div', {
  position: 'absolute',
  left: '$3',
  bottom: 80,
  maxWidth: '100%',
  width: '100%',
  height: 400,
  maxHeight: '62%',
  zIndex: 200,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  paddingRight: '$5',
  pointerEvents: 'none',

  '& iframe': {
    border: 'none',
  },
})

const GuideViewerInnerContainer = styled('div', {
  position: 'relative',
  width: 600,
  maxWidth: '100%',
  height: '100%',
  backgroundColor: '$panel',
  borderRadius: '$2',
  boxShadow: '$panel',
  pointerEvents: 'all',
})

const CloseButtonWrapper = styled('button', {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '$3',
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})