'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('profiles', 'location', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'nationality', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'availability', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'dateOfBirth', { type: Sequelize.DATEONLY, allowNull: true });
    await queryInterface.addColumn('profiles', 'phone', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'address', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'github', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'twitter', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'linkedin', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'expectedSalary', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'ownACar', { type: Sequelize.BOOLEAN, allowNull: true });
    await queryInterface.addColumn('profiles', 'haveDrivingLicense', { type: Sequelize.BOOLEAN, allowNull: true });
    await queryInterface.addColumn('profiles', 'noticePeriod', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'immigrationStatus', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('profiles', 'referees', { type: Sequelize.TEXT, allowNull: true });
    await queryInterface.addColumn('profiles', 'willingToRelocate', { type: Sequelize.BOOLEAN, allowNull: true });
    await queryInterface.addColumn('profiles', 'languages', { type: Sequelize.TEXT, allowNull: true });
    await queryInterface.addColumn('profiles', 'skills', { type: Sequelize.TEXT, allowNull: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('profiles', 'location');
    await queryInterface.removeColumn('profiles', 'nationality');
    await queryInterface.removeColumn('profiles', 'availability');
    await queryInterface.removeColumn('profiles', 'dateOfBirth');
    await queryInterface.removeColumn('profiles', 'phone');
    await queryInterface.removeColumn('profiles', 'address');
    await queryInterface.removeColumn('profiles', 'github');
    await queryInterface.removeColumn('profiles', 'twitter');
    await queryInterface.removeColumn('profiles', 'linkedin');
    await queryInterface.removeColumn('profiles', 'expectedSalary');
    await queryInterface.removeColumn('profiles', 'ownACar');
    await queryInterface.removeColumn('profiles', 'haveDrivingLicense');
    await queryInterface.removeColumn('profiles', 'noticePeriod');
    await queryInterface.removeColumn('profiles', 'immigrationStatus');
    await queryInterface.removeColumn('profiles', 'referees');
    await queryInterface.removeColumn('profiles', 'willingToRelocate');
    await queryInterface.removeColumn('profiles', 'languages');
    await queryInterface.removeColumn('profiles', 'skills');
  }
};
