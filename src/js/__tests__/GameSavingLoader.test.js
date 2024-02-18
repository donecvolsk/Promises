import GameSavingLoader from "../GameSavingLoader";

test("Тест класса GameSavingLoader", (done) => {
  const example = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });
    
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(example);
    done();
  });
});