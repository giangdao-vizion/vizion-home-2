const data = require('./datavizion.json');

const resolvers = {
  Query: {
    tour: (parent, args) => {
      return data.tour.id === args.id ? data.tour : null;
    },
    customer: (parent, args) => {
      return data.customer.Id === args.id ? data.customer : null;
    },
    scenes: (parent, args) => {
      return data.scenes.find(scene => scene.id === args.id) || null;
    },
    media: (parent, args) => {
      return data.media.find(media => media.id === args.id) || null;
    },
    group: (parent, args) => {
      return data.groups.find(group => group.id === args.id) || null;
    }
  },
  
  Mutation: {
    createTour: (parent, args) => {
      const newTour = { id: args.id, title: args.title };
      data.tour = newTour;
      return newTour;
    },
    updateTour: (parent, args) => {
      const tour = data.tour.id === args.id ? data.tour : null;
      if (tour) {
        tour.title = args.title;
        return tour;
      }
      return null;
    },
    deleteTour: (parent, args) => {
      if (data.tour.id === args.id) {
        data.tour = null;
        return true;
      }
      return false;
    },
    
    createCustomer: (parent, args) => {
      const newCustomer = { id: args.id, name: args.name };
      data.customer = newCustomer;
      return newCustomer;
    },
    updateCustomer: (parent, args) => {
      const customer = data.customer.Id === args.id ? data.customer : null;
      if (customer) {
        customer.name = args.name;
        return customer;
      }
      return null;
    },
    deleteCustomer: (parent, args) => {
      if (data.customer.Id === args.id) {
        data.customer = null;
        return true;
      }
      return false;
    },
    
    createScene: (parent, args) => {
      const newScene = { id: args.id, title: args.title };
      data.scenes.push(newScene);
      return newScene;
    },
    updateScene: (parent, args) => {
      const scene = data.scenes.find(scene => scene.id === args.id);
      if (scene) {
        scene.title = args.title;
        return scene;
      }
      return null;
    },
    deleteScene: (parent, args) => {
      const index = data.scenes.findIndex(scene => scene.id === args.id);
      if (index > -1) {
        data.scenes.splice(index, 1);
        return true;
      }
      return false;
    },
    
    createMedia: (parent, args) => {
      const newMedia = { id: args.id, title: args.title };
      data.media.push(newMedia);
      return newMedia;
    },
    updateMedia: (parent, args) => {
      const media = data.media.find(media => media.id === args.id);
      if (media) {
        media.title = args.title;
        return media;
      }
      return null;
    },
    deleteMedia: (parent, args) => {
      const index = data.media.findIndex(media => media.id === args.id);
      if (index > -1) {
        data.media.splice(index, 1);
        return true;
      }
      return false;
    },
    
    createGroup: (parent, args) => {
      const newGroup = { id: args.id, title: args.title };
      data.groups.push(newGroup);
      return newGroup;
    },
    updateGroup: (parent, args) => {
      const group = data.groups.find(group => group.id === args.id);
      if (group) {
        group.title = args.title;
        return group;
      }
      return null;
    },
    deleteGroup: (parent, args) => {
      const index = data.groups.findIndex(group => group.id === args.id);
      if (index > -1) {
        data.groups.splice(index, 1);
        return true;
      }
      return false;
    }
  }
};

module.exports = resolvers;
