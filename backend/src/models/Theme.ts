import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection';

export class Theme extends Model {
  public id!: string;
  public storyId!: string;
  public name!: string;
  public description!: string;
  public chaptersUsed!: number[];
  public frequency!: number;
}

Theme.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    storyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    chaptersUsed: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
    frequency: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: 'Theme',
    tableName: 'themes',
    timestamps: true,
  }
);

export default Theme;
