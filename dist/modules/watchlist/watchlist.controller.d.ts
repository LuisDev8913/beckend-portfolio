import { WatchlistService } from './watchlist.service';
import { WatchListDTO } from './dto';
import { CreateAssetResponse } from './response';
import { Watchlist } from './models/watchlist.model';
export declare class WatchlistController {
    private readonly watchlistService;
    constructor(watchlistService: WatchlistService);
    createAsset(assetDto: WatchListDTO, request: any): Promise<CreateAssetResponse>;
    getUserAssets(request: any): Promise<Watchlist[]>;
    deleteAsset(assetId: string, request: any): Promise<boolean>;
}
