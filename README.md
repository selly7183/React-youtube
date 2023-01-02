* Site : https://magnificent-queijadas-85a83d.netlify.app/
![youtube](https://user-images.githubusercontent.com/88068412/210200880-8203b7be-2a69-40a0-bf26-6c1bc843e97e.png)

1. Youtube APIs 사용.
2. key 발급.
3. postman 사용해서 관련된 APIs들 관리.
4. 관련된 APIs 들을 JSON 포멧으로 저장하여 MOCK data를 사용. (서버 과부하로 인해 Youtube에서 하루 10000 unit으로 한정해놓음.)
5. 개발이 마무리 되어 갈때에는 Youtube APIs를 사용.
6. 사용된 API
  1) 키워드 검색
  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]

  2) 핫트렌드 비디오들
  https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=[YOUR_API_KEY]

  3) 연관된 비디오 검색
  https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=[YOUR_API_KEY]

  4) 채널 상세내용
  https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]
  
7. TailWindCss 을 활용해서 반응형까지 작업 완료.
8. Netlify를 사용하여 배포.
