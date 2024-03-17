import mongoose from 'mongoose';

interface IPlayer {
  name: string;
}

const PlayerSchema = new mongoose.Schema<IPlayer>({
  name:{
    type: String,
    required: true,
  }
}, {
  collection: "player"
});

const PlayerModel = mongoose.model<IPlayer>("player", PlayerSchema);
export default PlayerModel;

