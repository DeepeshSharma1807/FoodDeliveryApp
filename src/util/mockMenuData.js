const mockMenuData = {
  "356931": { // Pizza Hut ID
    cards: [
      {},
      {},
      {
        card: {
          card: {
            info: {
              name: "Pizza Hut",
              cuisines: ["Pizzas", "Italian"],
              costForTwo: 35000, // ₹350 for two (in paise)
              avgRating: 4.3
            }
          }
        }
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},
                {},
                {
                  card: {
                    card: {
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "1",
                              name: "Margherita Pizza",
                              price: 29900, // ₹299 in paise
                              description: "Classic pizza with fresh mozzarella, tomato sauce, and basil"
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "2",
                              name: "Pepperoni Pizza",
                              price: 39900, // ₹399 in paise
                              description: "Delicious pizza topped with pepperoni and mozzarella cheese"
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "3",
                              name: "Veggie Supreme",
                              defaultPrice: 34900, // ₹349 in paise
                              description: "Loaded with fresh vegetables, bell peppers, onions, and mushrooms"
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "4",
                              name: "BBQ Chicken Pizza",
                              price: 44900, // ₹449 in paise
                              description: "Grilled chicken with BBQ sauce, onions, and mozzarella"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  },
  "8032": { // Burger King ID
    cards: [
      {},
      {},
      {
        card: {
          card: {
            info: {
              name: "Burger King",
              cuisines: ["Burgers", "American", "Fast Food"],
              costForTwo: 35000,
              avgRating: 3.9
            }
          }
        }
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},
                {},
                {
                  card: {
                    card: {
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "1",
                              name: "Whopper",
                              price: 25900,
                              description: "Flame-grilled beef patty with fresh lettuce, tomato, and mayo"
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "2",
                              name: "Chicken Royale",
                              price: 22900,
                              description: "Crispy chicken fillet with lettuce and mayo"
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "3",
                              name: "Veg Whopper",
                              defaultPrice: 21900,
                              description: "Plant-based patty with fresh vegetables and sauces"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  },
  // Default menu for any restaurant not specifically defined
  "default": {
    cards: [
      {},
      {},
      {
        card: {
          card: {
            info: {
              name: "Restaurant Menu",
              cuisines: ["Multi Cuisine"],
              costForTwo: 30000,
              avgRating: 4.0
            }
          }
        }
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},
                {},
                {
                  card: {
                    card: {
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "1",
                              name: "Special Dish",
                              price: 24900,
                              description: "Chef's special recommendation with fresh ingredients"
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "2",
                              name: "Popular Item",
                              price: 19900,
                              description: "Most loved dish by our customers"
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "3",
                              name: "Combo Meal",
                              defaultPrice: 29900,
                              description: "Complete meal with main course, side, and drink"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
};

export default mockMenuData;